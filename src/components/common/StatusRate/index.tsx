type StatusRateProps = {
  participateRate: number;
  passRate: number;
};

export function StatusRate({ participateRate, passRate }: StatusRateProps) {
  return (
    <div className="flex items-center">
      <p>{participateRate} tham gia</p>
      <span> - </span>
      <p>đạt {passRate}</p>
    </div>
  );
}
