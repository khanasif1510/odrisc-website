export type FakeAdapterBehavior<Input, Output> = (
  input: Input,
  callIndex: number,
) => Output | Promise<Output>;

export type RecordingFakeAdapter<Input, Output> = {
  readonly calls: readonly Input[];
  invoke(input: Input): Promise<Output>;
  reset(): void;
};

function createRecordingFakeAdapter<Input, Output>(
  behavior: FakeAdapterBehavior<Input, Output>,
): RecordingFakeAdapter<Input, Output> {
  const calls: Input[] = [];

  return {
    calls,

    async invoke(input) {
      const callIndex = calls.length;

      calls.push(input);

      return behavior(input, callIndex);
    },

    reset() {
      calls.length = 0;
    },
  };
}

export function createOdriscPublicApiFake<Input, Output>(
  behavior: FakeAdapterBehavior<Input, Output>,
) {
  return createRecordingFakeAdapter(behavior);
}

export function createLeadDeliveryFake<Input, Output>(
  behavior: FakeAdapterBehavior<Input, Output>,
) {
  return createRecordingFakeAdapter(behavior);
}

export function createAnalyticsFake<Input, Output>(behavior: FakeAdapterBehavior<Input, Output>) {
  return createRecordingFakeAdapter(behavior);
}

export function createErrorMonitoringFake<Input, Output>(
  behavior: FakeAdapterBehavior<Input, Output>,
) {
  return createRecordingFakeAdapter(behavior);
}
