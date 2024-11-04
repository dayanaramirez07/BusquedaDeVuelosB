import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format, isBefore, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const disabledBeforeToday = (date: Date) => {
  const today = new Date();
  return isBefore(date, today) && !isSameDay(date, today);
};

const DepartureDate = ({ onDateSelect }: { onDateSelect: (date: Date | undefined) => void }) => {
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start text-left font-normal">
            <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
            {date ? format(date, "LLL dd, y") : <span>Pick a departure date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate);
              onDateSelect(selectedDate);
            }}
            disabled={disabledBeforeToday}
            mode="single"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

const RoundTripDate = ({
  className,
  onDepartureSelect,
  onReturnSelect,
}: {
  className?: string;
  onDepartureSelect: (date: Date | undefined) => void;
  onReturnSelect: (date: Date | undefined) => void;
}) => {
  const [departureDate, setDepartureDate] = React.useState<Date | undefined>();
  const [returnDate, setReturnDate] = React.useState<Date | undefined>();

  const today = new Date();

  const disabledReturnDates = (date: Date) => {
    if (departureDate) {
      return isBefore(date, departureDate);
    } else {
      return isBefore(date, today); // Deshabilita fechas antes de hoy si no hay fecha de salida
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="round-trip-date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !departureDate && !returnDate && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
            {departureDate ? (
              returnDate ? (
                <>
                  {format(departureDate, "LLL dd, y")} - {format(returnDate, "LLL dd, y")}
                </>
              ) : (
                format(departureDate, "LLL dd, y")
              )
            ) : (
              <span>Pick a round trip date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <div className="flex">
            <div className="flex flex-col">
              <div className="text-center p-4 font-bold">Departure date</div>
              <Calendar
                initialFocus
                selected={departureDate}
                onSelect={(date) => {
                  setDepartureDate(date);
                  onDepartureSelect(date);
                }}
                disabled={disabledBeforeToday}
                mode="single"
              />
            </div>

            <div className="flex flex-col">
              <div className="text-center p-4 font-bold">Return date</div>
              <Calendar
                initialFocus
                selected={returnDate}
                onSelect={(date) => {
                  setReturnDate(date);
                  onReturnSelect(date);
                }}
                disabled={disabledReturnDates}
                mode="single"
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export { RoundTripDate, DepartureDate };
