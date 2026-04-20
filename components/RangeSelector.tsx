type RangeOptiion = "6H" | "12H" | "1D" | "1W" | "1M";

type RangeSelectorProps = {
    selected: RangeOptiion;
    onChange: (value: RangeOptiion) => void;
}

const options: RangeOptiion[] = ["6H", "12H", "1D", "1W", "1M"];

export default function RangeSelector({ selected, onChange }: RangeSelectorProps) {
    return (
        <div className="inline-flex rounded-xl border border-slate-800 bg-slate-900 p-1">
            {options.map((opt) => {
                const isActive = selected === opt;

                return (
                    <button
                        key={opt}
                        onClick={() => onChange(opt)}
                        className={`px-3 py-1 rounded-md text-sm font-medium ${isActive
                                ? "bg-sky-500 text-slate-950"
                                : "text-slate-300 hover:bg-slate-800"
                            }`}
                    >
                        {opt}
                    </button>
                );
            })}
        </div>
    )
}