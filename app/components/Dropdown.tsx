import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "~/utils/cn";

export interface DropdownOption {
  value: string;
  label: string;
  selected?: boolean;
}

interface DropdownProps {
  options: DropdownOption[];
  trigger: React.ReactNode;
  onValueChange?: (value: string) => void;
  className?: string;
  multiSelect?: boolean;
  align?: "start" | "center" | "end";
}

export function CustomDropdown({
  options,
  trigger,
  onValueChange,
  className,
  multiSelect = false,
  align = "start",
}: DropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className={cn(
            "inline-flex items-center justify-between px-4 py-3 text-sm font-montserrat",
            "bg-white border border-gray-200 rounded-md shadow-sm text-gray-900",
            "hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1",
            "data-[state=open]:bg-gray-50",
            className
          )}
        >
          {trigger}
          <ChevronDown className="h-4 w-4 text-gray-500 ml-2" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          className={cn(
            "min-w-[220px] bg-white rounded-md border border-gray-200 shadow-lg",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            "z-50 p-1"
          )}
          sideOffset={5}
        >
          {options.map((option) => (
            <DropdownMenu.Item
              key={option.value}
              className={cn(
                "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-2 text-sm font-montserrat",
                "text-gray-900 outline-none transition-colors focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                "hover:bg-gray-50 focus:text-gray-900"
              )}
              onSelect={() => onValueChange?.(option.value)}
            >
              {multiSelect && (
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                  {option.selected && (
                    <Check className="h-4 w-4 text-gray-900" />
                  )}
                </span>
              )}
              <span className={cn("text-gray-900", multiSelect && "ml-6")}>
                {option.label}
              </span>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
