import { TimeString } from '@/model/Duration';
import React from 'react';

interface DurationViewProps {
  data: TimeString;
}

export function DurationView({ data }: DurationViewProps) {
  return (
    <div className="flex flex-col gap-2 my-8">
      <p className="sm:block flex flex-col items-center">
        No of Episodes <strong>{data.num}</strong>
      </p>
      <p className="sm:block flex flex-col items-center">
        Total Duration <strong>{data.total}</strong>
      </p>
      <p className="sm:block flex flex-col items-center">
        At 1.25x <strong>{data['1.25']}</strong>
      </p>
      <p className="sm:block flex flex-col items-center">
        At 1.50x <strong>{data['1.5']}</strong>
      </p>
      <p className="sm:block flex flex-col items-center">
        At 1.75x <strong>{data['1.75']}</strong>
      </p>
      <p className="sm:block flex flex-col items-center">
        At 2.00x <strong>{data['2']}</strong>
      </p>
    </div>
  );
}
