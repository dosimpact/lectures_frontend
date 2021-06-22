type NetworkLoadingState = {
  state: "loading";
};

type NetworkFailedState = {
  state: "failed";
  code: number;
};

type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

// 위 타입들 중 단 하나를 대표하는 타입을 만들었지만,
// 그것이 무엇에 해당하는지 아직 확실하지 않습니다.
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

type NetworkStateKey = keyof NetworkState;

const vvvv: NetworkStateKey = "state";

function networkStatus(state: NetworkState): string {
  // 현재 TypeScript는 셋 중 어떤 것이
  // state가 될 수 있는 잠재적인 타입인지 알 수 없습니다.

  // 모든 타입에 공유되지 않는 프로퍼티에 접근하려는 시도는
  // 오류를 발생시킵니다.
  // state.code;

  // state에 swtich문을 사용하여, TypeScript는 코드 흐름을 분석하면서
  // 유니언 타입을 좁혀나갈 수 있습니다.
  switch (state.state) {
    case "loading":
      return "Downloading...";
    case "failed":
      // 여기서 타입은 NetworkFailedState일 것이며,
      // 따라서 `code` 필드에 접근할 수 있습니다.
      return `Error ${state.code} downloading`;
    case "success":
      return `Downloaded ${state.response.title} - ${state.response.summary}`;
  }
}
