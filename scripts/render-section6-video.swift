import AVFoundation
import AppKit
import QuartzCore

let canvas = CGSize(width: 1920, height: 1080)
let totalDuration = 20.0
let coral = CGColor(red: 1, green: 118 / 255, blue: 128 / 255, alpha: 1)
let mint = CGColor(red: 128 / 255, green: 1, blue: 204 / 255, alpha: 1)
let ink = CGColor(red: 77 / 255, green: 77 / 255, blue: 77 / 255, alpha: 1)
let warmWhite = CGColor(red: 1, green: 252 / 255, blue: 250 / 255, alpha: 1)

func layerOpacity(_ layer: CALayer, start: Double, end: Double, fade: Double = 0.55) {
  let animation = CAKeyframeAnimation(keyPath: "opacity")
  animation.values = [0, 0, 1, 1, 0, 0]
  animation.keyTimes = [
    0,
    NSNumber(value: max(0, start - fade) / totalDuration),
    NSNumber(value: start / totalDuration),
    NSNumber(value: end / totalDuration),
    NSNumber(value: min(totalDuration, end + fade) / totalDuration),
    1,
  ]
  animation.duration = totalDuration
  animation.beginTime = AVCoreAnimationBeginTimeAtZero
  animation.isRemovedOnCompletion = false
  animation.fillMode = .both
  layer.add(animation, forKey: "scene-opacity")
}

func textLayer(
  _ text: String,
  frame: CGRect,
  size: CGFloat,
  color: CGColor = ink,
  weight: NSFont.Weight = .medium,
  alignment: CATextLayerAlignmentMode = .left
) -> CALayer {
  let layer = CALayer()
  layer.frame = frame
  let renderScale: CGFloat = 2
  let paragraph = NSMutableParagraphStyle()
  switch alignment {
  case .center: paragraph.alignment = .center
  case .right: paragraph.alignment = .right
  case .justified: paragraph.alignment = .justified
  default: paragraph.alignment = .left
  }
  let attributedText = NSAttributedString(
    string: text,
    attributes: [
      .font: NSFont.systemFont(ofSize: size * renderScale, weight: weight),
      .foregroundColor: NSColor(cgColor: color) ?? NSColor.black,
      .paragraphStyle: paragraph,
    ]
  )
  guard let bitmap = NSBitmapImageRep(
    bitmapDataPlanes: nil,
    pixelsWide: max(1, Int(frame.width * renderScale)),
    pixelsHigh: max(1, Int(frame.height * renderScale)),
    bitsPerSample: 8,
    samplesPerPixel: 4,
    hasAlpha: true,
    isPlanar: false,
    colorSpaceName: .deviceRGB,
    bytesPerRow: 0,
    bitsPerPixel: 0
  ), let context = NSGraphicsContext(bitmapImageRep: bitmap) else {
    return layer
  }
  NSGraphicsContext.saveGraphicsState()
  NSGraphicsContext.current = context
  context.cgContext.clear(
    CGRect(x: 0, y: 0, width: frame.width * renderScale, height: frame.height * renderScale)
  )
  attributedText.draw(
    with: CGRect(
      x: 0,
      y: 0,
      width: frame.width * renderScale,
      height: frame.height * renderScale
    ),
    options: [.usesLineFragmentOrigin, .usesFontLeading]
  )
  context.flushGraphics()
  NSGraphicsContext.restoreGraphicsState()
  layer.contents = bitmap.cgImage
  layer.contentsGravity = .resize
  return layer
}

func pill(
  _ label: String,
  x: CGFloat,
  y: CGFloat,
  accent: CGColor,
  delay: Double,
  end: Double = 4.7
) -> CALayer {
  let width = max(150, CGFloat(label.count) * 12 + 54)
  let layer = CALayer()
  layer.frame = CGRect(x: x, y: y, width: width, height: 50)
  layer.backgroundColor = CGColor(red: 1, green: 1, blue: 1, alpha: 0.9)
  layer.cornerRadius = 25
  layer.borderWidth = 1.25
  layer.borderColor = accent.copy(alpha: 0.5)
  layer.shadowColor = ink
  layer.shadowOpacity = 0.08
  layer.shadowRadius = 14
  layer.shadowOffset = CGSize(width: 0, height: 7)

  let dot = CALayer()
  dot.frame = CGRect(x: 18, y: 18, width: 14, height: 14)
  dot.backgroundColor = accent
  dot.cornerRadius = 7
  layer.addSublayer(dot)

  let labelLayer = textLayer(
    label,
    frame: CGRect(x: 43, y: 10, width: width - 56, height: 30),
    size: 20,
    weight: .semibold
  )
  layer.addSublayer(labelLayer)
  layerOpacity(layer, start: delay, end: end, fade: 0.35)

  let drift = CABasicAnimation(keyPath: "transform.translation.x")
  drift.fromValue = -18
  drift.toValue = 0
  drift.duration = 0.9
  drift.beginTime = AVCoreAnimationBeginTimeAtZero + delay
  drift.timingFunction = CAMediaTimingFunction(name: .easeOut)
  drift.fillMode = .both
  drift.isRemovedOnCompletion = false
  layer.add(drift, forKey: "arrival")
  return layer
}

func trajectory(
  points: [CGPoint],
  color: CGColor,
  lineWidth: CGFloat,
  start: Double,
  end: Double
) -> CAShapeLayer {
  let path = CGMutablePath()
  path.move(to: points[0])
  if points.count == 4 {
    path.addCurve(to: points[3], control1: points[1], control2: points[2])
  } else {
    for point in points.dropFirst() { path.addLine(to: point) }
  }
  let layer = CAShapeLayer()
  layer.path = path
  layer.fillColor = nil
  layer.strokeColor = color
  layer.lineWidth = lineWidth
  layer.lineCap = .round
  layer.lineJoin = .round
  layer.shadowColor = color
  layer.shadowOpacity = 0.22
  layer.shadowRadius = 12

  let draw = CABasicAnimation(keyPath: "strokeEnd")
  draw.fromValue = 0
  draw.toValue = 1
  draw.duration = max(0.4, end - start)
  draw.beginTime = AVCoreAnimationBeginTimeAtZero + start
  draw.timingFunction = CAMediaTimingFunction(name: .easeInEaseOut)
  draw.fillMode = .both
  draw.isRemovedOnCompletion = false
  layer.add(draw, forKey: "draw")
  return layer
}

func fetalSilhouette() -> CALayer {
  let group = CALayer()
  group.frame = CGRect(x: 1265, y: 320, width: 330, height: 330)

  let halo = CAShapeLayer()
  halo.path = CGPath(ellipseIn: CGRect(x: 15, y: 15, width: 300, height: 300), transform: nil)
  halo.fillColor = CGColor(red: 1, green: 1, blue: 1, alpha: 0.16)
  halo.strokeColor = mint.copy(alpha: 0.58)
  halo.lineWidth = 3
  halo.lineDashPattern = [12, 13]
  group.addSublayer(halo)

  let silhouettePath = CGMutablePath()
  silhouettePath.addEllipse(in: CGRect(x: 112, y: 176, width: 82, height: 82))
  silhouettePath.move(to: CGPoint(x: 145, y: 177))
  silhouettePath.addCurve(
    to: CGPoint(x: 202, y: 80),
    control1: CGPoint(x: 91, y: 142),
    control2: CGPoint(x: 118, y: 72)
  )
  silhouettePath.addCurve(
    to: CGPoint(x: 121, y: 117),
    control1: CGPoint(x: 247, y: 108),
    control2: CGPoint(x: 218, y: 172)
  )
  silhouettePath.move(to: CGPoint(x: 128, y: 141))
  silhouettePath.addCurve(
    to: CGPoint(x: 203, y: 126),
    control1: CGPoint(x: 155, y: 107),
    control2: CGPoint(x: 187, y: 104)
  )

  let silhouette = CAShapeLayer()
  silhouette.path = silhouettePath
  silhouette.fillColor = coral.copy(alpha: 0.08)
  silhouette.strokeColor = coral.copy(alpha: 0.74)
  silhouette.lineWidth = 4
  silhouette.lineCap = .round
  silhouette.lineJoin = .round
  group.addSublayer(silhouette)

  let pulse = CABasicAnimation(keyPath: "transform.scale")
  pulse.fromValue = 0.985
  pulse.toValue = 1.025
  pulse.autoreverses = true
  pulse.repeatCount = .infinity
  pulse.duration = 2.4
  pulse.beginTime = AVCoreAnimationBeginTimeAtZero + 6
  group.add(pulse, forKey: "breath")
  layerOpacity(group, start: 6.2, end: 14.8, fade: 0.65)
  return group
}

let sourceURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[2])
try? FileManager.default.removeItem(at: outputURL)
try FileManager.default.createDirectory(
  at: outputURL.deletingLastPathComponent(),
  withIntermediateDirectories: true
)

let sourceAsset = AVURLAsset(url: sourceURL)
let sourceDuration = try await sourceAsset.load(.duration)
let sourceTracks = try await sourceAsset.loadTracks(withMediaType: .video)
guard let sourceTrack = sourceTracks.first else { fatalError("No video track") }

let composition = AVMutableComposition()
guard let compositionTrack = composition.addMutableTrack(
  withMediaType: .video,
  preferredTrackID: kCMPersistentTrackID_Invalid
) else { fatalError("Unable to create composition track") }

let renderDuration = CMTime(seconds: totalDuration, preferredTimescale: 600)
try compositionTrack.insertTimeRange(
  CMTimeRange(start: .zero, duration: min(sourceDuration, renderDuration)),
  of: sourceTrack,
  at: .zero
)

let naturalSize = try await sourceTrack.load(.naturalSize)
let preferredTransform = try await sourceTrack.load(.preferredTransform)
let sourceRect = CGRect(origin: .zero, size: naturalSize).applying(preferredTransform)
let displayedSize = CGSize(width: abs(sourceRect.width), height: abs(sourceRect.height))
let scale = max(canvas.width / displayedSize.width, canvas.height / displayedSize.height)
let scaledSize = CGSize(width: displayedSize.width * scale, height: displayedSize.height * scale)
let tx = (canvas.width - scaledSize.width) / 2
let ty = (canvas.height - scaledSize.height) / 2
var videoTransform = preferredTransform
videoTransform = videoTransform.concatenating(
  CGAffineTransform(translationX: -sourceRect.minX, y: -sourceRect.minY)
)
videoTransform = videoTransform.concatenating(CGAffineTransform(scaleX: scale, y: scale))
videoTransform = videoTransform.concatenating(CGAffineTransform(translationX: tx, y: ty))

let instruction = AVMutableVideoCompositionInstruction()
instruction.timeRange = CMTimeRange(start: .zero, duration: renderDuration)
let layerInstruction = AVMutableVideoCompositionLayerInstruction(assetTrack: compositionTrack)
layerInstruction.setTransform(videoTransform, at: .zero)
instruction.layerInstructions = [layerInstruction]

let videoComposition = AVMutableVideoComposition()
videoComposition.renderSize = canvas
videoComposition.frameDuration = CMTime(value: 1, timescale: 30)
videoComposition.instructions = [instruction]

let parentLayer = CALayer()
parentLayer.frame = CGRect(origin: .zero, size: canvas)
parentLayer.backgroundColor = warmWhite
let videoLayer = CALayer()
videoLayer.frame = parentLayer.bounds
parentLayer.addSublayer(videoLayer)

let wash = CAGradientLayer()
wash.frame = parentLayer.bounds
wash.colors = [
  CGColor(red: 1, green: 236 / 255, blue: 238 / 255, alpha: 0.13),
  CGColor(red: 1, green: 1, blue: 1, alpha: 0.02),
  CGColor(red: 1, green: 236 / 255, blue: 238 / 255, alpha: 0.1),
]
wash.locations = [0, 0.55, 1]
wash.startPoint = CGPoint(x: 0, y: 0.5)
wash.endPoint = CGPoint(x: 1, y: 0.5)
parentLayer.addSublayer(wash)

let eyebrow = textLayer(
  "TWO JOURNEYS. ONE PREGNANCY.",
  frame: CGRect(x: 105, y: 950, width: 700, height: 40),
  size: 22,
  color: coral,
  weight: .bold
)
layerOpacity(eyebrow, start: 0.35, end: 4.8)
parentLayer.addSublayer(eyebrow)

let maternalPath = trajectory(
  points: [
    CGPoint(x: 105, y: 430), CGPoint(x: 300, y: 550),
    CGPoint(x: 600, y: 370), CGPoint(x: 840, y: 520),
  ],
  color: coral.copy(alpha: 0.78)!, lineWidth: 5, start: 0.5, end: 4.2
)
layerOpacity(maternalPath, start: 0.3, end: 5.0)
parentLayer.addSublayer(maternalPath)

let maternalLabels: [(String, CGFloat, CGFloat)] = [
  ("Pregnancy risk", 110, 790), ("BMI", 330, 790), ("Weight", 475, 790),
  ("Nutrition", 110, 715), ("Activity", 310, 715), ("Maternal health", 485, 715),
]
for (index, item) in maternalLabels.enumerated() {
  parentLayer.addSublayer(
    pill(item.0, x: item.1, y: item.2, accent: coral, delay: 0.65 + Double(index) * 0.28)
  )
}

let fetalScene = CALayer()
fetalScene.frame = parentLayer.bounds
let fetalTitle = textLayer(
  "YOUR BABY’S GROWTH — UNDERSTOOD OVER TIME",
  frame: CGRect(x: 105, y: 950, width: 900, height: 40),
  size: 22,
  color: CGColor(red: 45 / 255, green: 145 / 255, blue: 112 / 255, alpha: 1),
  weight: .bold
)
fetalScene.addSublayer(fetalTitle)
let fetalPath = trajectory(
  points: [
    CGPoint(x: 105, y: 350), CGPoint(x: 320, y: 475),
    CGPoint(x: 610, y: 305), CGPoint(x: 860, y: 445),
  ],
  color: mint.copy(alpha: 0.84)!, lineWidth: 5, start: 6.2, end: 9.5
)
fetalScene.addSublayer(fetalPath)
let fetalLabels: [(String, CGFloat, CGFloat)] = [
  ("Gestational age", 110, 790), ("Biometry", 350, 790), ("Growth", 535, 790),
  ("Percentiles", 110, 715), ("Velocity", 315, 715), ("Clinical observations", 485, 715),
]
for (index, item) in fetalLabels.enumerated() {
  fetalScene.addSublayer(
    pill(
      item.0,
      x: item.1,
      y: item.2,
      accent: mint,
      delay: 6.3 + Double(index) * 0.25,
      end: 9.8
    )
  )
}
fetalScene.addSublayer(fetalSilhouette())
layerOpacity(fetalScene, start: 6.0, end: 10.2, fade: 0.65)
parentLayer.addSublayer(fetalScene)

let convergence = CALayer()
convergence.frame = parentLayer.bounds
let convergenceTitle = textLayer(
  "CONNECTS CHANGE ACROSS TIME",
  frame: CGRect(x: 105, y: 950, width: 760, height: 46),
  size: 24,
  color: ink,
  weight: .bold
)
convergence.addSublayer(convergenceTitle)
convergence.addSublayer(
  trajectory(
    points: [
      CGPoint(x: 110, y: 650), CGPoint(x: 360, y: 735),
      CGPoint(x: 590, y: 620), CGPoint(x: 815, y: 540),
    ],
    color: coral.copy(alpha: 0.75)!, lineWidth: 6, start: 10.8, end: 13.2
  )
)
convergence.addSublayer(
  trajectory(
    points: [
      CGPoint(x: 110, y: 330), CGPoint(x: 340, y: 260),
      CGPoint(x: 600, y: 395), CGPoint(x: 815, y: 540),
    ],
    color: mint.copy(alpha: 0.82)!, lineWidth: 6, start: 10.9, end: 13.3
  )
)
let node = CALayer()
node.frame = CGRect(x: 730, y: 455, width: 250, height: 170)
node.backgroundColor = CGColor(red: 1, green: 1, blue: 1, alpha: 0.92)
node.cornerRadius = 85
node.borderWidth = 3
node.borderColor = coral.copy(alpha: 0.62)
node.shadowColor = mint
node.shadowOpacity = 0.35
node.shadowRadius = 28
node.shadowOffset = .zero
node.addSublayer(
  textLayer(
    "ODRISC\nINTELLIGENCE",
    frame: CGRect(x: 25, y: 47, width: 200, height: 78),
    size: 23,
    color: ink,
    weight: .bold,
    alignment: .center
  )
)
layerOpacity(node, start: 12.0, end: 15.0, fade: 0.7)
convergence.addSublayer(node)
convergence.addSublayer(
  trajectory(
    points: [
      CGPoint(x: 965, y: 540), CGPoint(x: 1100, y: 570),
      CGPoint(x: 1240, y: 505), CGPoint(x: 1390, y: 535),
    ],
    color: CGColor(red: 1, green: 166 / 255, blue: 153 / 255, alpha: 0.9),
    lineWidth: 7,
    start: 12.7,
    end: 14.5
  )
)
layerOpacity(convergence, start: 10.5, end: 15.2, fade: 0.7)
parentLayer.addSublayer(convergence)

let closing = CALayer()
closing.frame = parentLayer.bounds
let bellyGlow = CAShapeLayer()
bellyGlow.path = CGPath(ellipseIn: CGRect(x: 1255, y: 250, width: 430, height: 430), transform: nil)
bellyGlow.fillColor = CGColor(red: 1, green: 236 / 255, blue: 238 / 255, alpha: 0.11)
bellyGlow.strokeColor = CGColor(red: 1, green: 155 / 255, blue: 151 / 255, alpha: 0.48)
bellyGlow.lineWidth = 5
bellyGlow.shadowColor = coral
bellyGlow.shadowOpacity = 0.42
bellyGlow.shadowRadius = 34
closing.addSublayer(bellyGlow)
let closingTitle = textLayer(
  "Two journeys. One pregnancy.",
  frame: CGRect(x: 105, y: 690, width: 920, height: 86),
  size: 54,
  color: ink,
  weight: .bold
)
closing.addSublayer(closingTitle)
let closingSubtitle = textLayer(
  "One evolving maternal fetal story.",
  frame: CGRect(x: 105, y: 610, width: 950, height: 66),
  size: 38,
  color: coral,
  weight: .semibold
)
closing.addSublayer(closingSubtitle)
let closingLine = trajectory(
  points: [
    CGPoint(x: 110, y: 560), CGPoint(x: 430, y: 520),
    CGPoint(x: 820, y: 620), CGPoint(x: 1210, y: 500),
  ],
  color: CGColor(red: 1, green: 155 / 255, blue: 151 / 255, alpha: 0.84),
  lineWidth: 6,
  start: 16.1,
  end: 18.4
)
closing.addSublayer(closingLine)
let boundary = textLayer(
  "ODRISC supports understanding and care. It does not replace clinicians.",
  frame: CGRect(x: 107, y: 92, width: 1180, height: 38),
  size: 22,
  color: CGColor(red: 77 / 255, green: 77 / 255, blue: 77 / 255, alpha: 0.78),
  weight: .medium
)
closing.addSublayer(boundary)
layerOpacity(closing, start: 15.6, end: 20.0, fade: 0.75)
parentLayer.addSublayer(closing)

videoComposition.animationTool = AVVideoCompositionCoreAnimationTool(
  postProcessingAsVideoLayer: videoLayer,
  in: parentLayer
)

guard let exporter = AVAssetExportSession(
  asset: composition,
  presetName: AVAssetExportPresetHighestQuality
) else { fatalError("Unable to create export session") }
exporter.videoComposition = videoComposition
exporter.shouldOptimizeForNetworkUse = true
try await exporter.export(to: outputURL, as: .mp4)
print(outputURL.path)
