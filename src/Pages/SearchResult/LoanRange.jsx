const LoanRange = () => {
  return (
    <div className="mt-16 bg-[#ECF5FF] p-8 rounded-lg flex items-center gap-8 justify-between max-w-[1200px]">
      <div className="w-2/6">
        <p className="text-3xl font-semibold">Need a Home Loan?</p>
        <p className="mt-3">Select How much Home loan you can take</p>
      </div>

      <div className="w-4/6">
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={25}
          className="range [--range-shdw:#0051A1]"
          step={25}
        />

        <div className="w-full flex justify-between text-xs px-2">
          <span>$20K</span>
          <span>$30K</span>
          <span>$40K</span>
          <span>$50K</span>
          <span>$60K+</span>
        </div>
      </div>
    </div>
  );
};

export default LoanRange;
