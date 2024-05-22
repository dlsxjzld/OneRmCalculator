export const validateWeightRange = (weight: string): boolean => {
  const _weightCheckForRange = Number(weight);
  if (_weightCheckForRange < 0 || _weightCheckForRange > 1000) {
    alert('입력 가능한 범위는 0~1000 입니다!');
    return false;
  }
  return true;
};

export const validateWeightDecimalPointLength = (weight: string): boolean => {
  const _weightCheckForLength = weight.split('.')[1]?.length;

  if (_weightCheckForLength && _weightCheckForLength > 2) {
    alert('정확도를 위해 소수점 2자리까지만 입력해 주세요!');
    return false;
  }
  return true;
};

export const validateWeightExist = (weight: string): boolean => {
  return weight !== '';
};

export const validateRepeatExist = (repeat: number): boolean => {
  return repeat !== 0;
};
