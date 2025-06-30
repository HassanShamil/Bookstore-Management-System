import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function AdvancedStatCard({ title, value, icon, growth, positive = true }) {
  return (


    <div className="bg-white border rounded-xl shadow-sm p-4 flex items-center gap-4 w-full max-w-full sm:max-w-sm">
      
      <div className="p-3 rounded-full bg-blue-100 text-blue-600 text-2xl flex items-center justify-center">
        {icon}
      </div>

      
      <div className="flex flex-col">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-3xl font-bold">{value}</p>

        
        <div className="flex items-center text-sm mt-1 space-x-1">
          {positive ? (
            <ArrowUpRight className="h-4 w-4 text-green-500" />
          ) : (
            <ArrowDownRight className="h-4 w-4 text-red-500" />
          )}
          <span className={cn("font-medium", positive ? "text-green-500" : "text-red-500")}>
            {growth}%
          </span>
          <span className="text-gray-500">from last week</span>
        </div>
      </div>
    </div>

  );
}
