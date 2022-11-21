MIN_BRIDGE_LENGTH = 3;
MAX_BRIDGE_LENGTH = 20;

START_MESSAGE = '다리 건너기 게임을 시작합니다.';
INPUT_BRIDGE_LENGTH_MESSAGE = '다리의 길이를 입력해주세요.';
INPUT_MOVE_SELECT_MESSAGE = '이동할 칸을 선택해주세요. (위: U, 아래: D)';
INPUT_RESTART_MESSAGE = '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)';

BRIDGE_LENGTH_INPUT_ERROR_MESSAGE = {
  NOT_A_NUMBER_EXCEPTION: '[ERROR] 다리 길이는 숫자여야 합니다.',
  NOT_IN_RANGE_EXCEPTION: `[ERROR] 다리 길이는 ${MIN_BRIDGE_LENGTH}부터 ${MAX_BRIDGE_LENGTH} 사이의 숫자여야 합니다.`,
};

module.exports = {
  START_MESSAGE,
  INPUT_MOVE_SELECT_MESSAGE,
  INPUT_RESTART_MESSAGE,
  INPUT_BRIDGE_LENGTH_MESSAGE,
  BRIDGE_LENGTH_INPUT_ERROR_MESSAGE,
};
