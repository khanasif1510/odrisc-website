import AVFoundation
import AppKit

let sourceURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outputDirectory = URL(fileURLWithPath: CommandLine.arguments[2], isDirectory: true)
try FileManager.default.createDirectory(at: outputDirectory, withIntermediateDirectories: true)

let asset = AVURLAsset(url: sourceURL)
let duration = try await asset.load(.duration)
let tracks = try await asset.loadTracks(withMediaType: .video)
guard let track = tracks.first else {
  fatalError("No video track found")
}

let naturalSize = try await track.load(.naturalSize)
let transform = try await track.load(.preferredTransform)
let transformedSize = naturalSize.applying(transform)
print("duration=\(CMTimeGetSeconds(duration))")
print("natural=\(naturalSize.width)x\(naturalSize.height)")
print("display=\(abs(transformedSize.width))x\(abs(transformedSize.height))")

let generator = AVAssetImageGenerator(asset: asset)
generator.appliesPreferredTrackTransform = true
generator.maximumSize = CGSize(width: 1280, height: 1280)
generator.requestedTimeToleranceBefore = .zero
generator.requestedTimeToleranceAfter = .zero

for second in [0.0, 3.0, 8.0, 13.0, 18.0] {
  let safeSecond = min(second, max(0, CMTimeGetSeconds(duration) - 0.05))
  let image = try generator.copyCGImage(at: CMTime(seconds: safeSecond, preferredTimescale: 600), actualTime: nil)
  let bitmap = NSBitmapImageRep(cgImage: image)
  guard let png = bitmap.representation(using: .png, properties: [:]) else {
    continue
  }
  try png.write(to: outputDirectory.appendingPathComponent("frame-\(Int(second)).png"))
}
