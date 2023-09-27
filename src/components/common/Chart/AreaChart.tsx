'use client';
import { useMemo } from 'react';
import ReactApexChart from './ReactApexChart';
import { ApexOptions } from 'apexcharts';
import merge from 'lodash/merge';
import clsx from 'clsx';
import { useTheme } from '@/components/Providers';
import { DefaultColors } from 'tailwindcss/types/generated/colors';

type AreaChartsProps = {
  series: ApexOptions['series'];
  options?: ApexOptions;
  color?: 'primary' | 'success';
  title?: ApexOptions['title'];
  height?: number;
  className?: string;
};

export function AreaCharts({
  options,
  series,
  height = 400,
  title,
  color = 'primary',
  className
}: AreaChartsProps) {
  const {
    colors: { daisyUI, tailwind }
  } = useTheme();
  const apexOptions = useMemo(() => {
    if (!daisyUI || !tailwind) return;

    let apexColor = {
      main: daisyUI.primary,
      secondary: daisyUI['primary-content'],
      textColor: daisyUI['base-content']
    };
    if (color === 'success') {
      apexColor = {
        main: tailwind.green[500],
        secondary: tailwind.green[200],
        textColor: daisyUI['base-content']
      };
    }

    const defaultConfig = defaultOptions(tailwind, apexColor);

    if (title) {
      defaultConfig.title = {
        style: { fontWeight: 700, fontSize: '18px' },
        ...title
      };
    }

    if (!options) return defaultConfig;
    return merge(defaultConfig, options);
  }, [options, title, daisyUI, tailwind, color]);

  return (
    <div
      className={clsx(
        'bg-whiten p-3 text-xs pb-0 rounded-lg border border-solid border-gray-400',
        className
      )}>
      <ReactApexChart options={apexOptions} series={series} height={height} />
    </div>
  );
}

const defaultOptions = (
  tailwind: DefaultColors,
  color: { main: string; secondary: string; textColor: string }
): ApexOptions => {
  return {
    chart: {
      id: 'chart-area',
      fontFamily: 'Exo',
      foreColor: color.textColor,
      toolbar: {
        show: false
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 90, 100]
      }
    },
    grid: {
      show: true,
      borderColor: tailwind.gray[300],
      strokeDashArray: 7
    },
    annotations: {
      yaxis: [
        {
          y: 80,
          y2: null,
          strokeDashArray: 0,
          fillColor: tailwind.gray[600],
          borderColor: tailwind.green[600],
          borderWidth: 1,
          opacity: 0.3,
          offsetX: 0,
          offsetY: 0,
          width: '100%',
          yAxisIndex: 0,
          label: {
            borderColor: tailwind.green[600],
            borderWidth: 1,
            borderRadius: 2,
            text: 'Ngưỡng đạt',
            textAnchor: 'start',
            position: 'start',
            offsetX: 0,
            offsetY: -3,
            style: {
              background: tailwind.green[600],
              color: tailwind.white,
              fontSize: '0.75rem',
              fontFamily: 'Exo',
              fontWeight: '700',
              cssClass: '!fill-white',
              padding: {
                left: 5,
                right: 5,
                top: 2,
                bottom: 2
              }
            }
          }
        }
      ]
    },
    dataLabels: {
      enabled: false
    },
    colors: [color.main, color.secondary],
    stroke: {
      width: [4, 2],
      curve: 'smooth',
      dashArray: [0, 20],
      colors: [color.main, color.secondary]
    },

    xaxis: {
      categories: [],
      crosshairs: {
        stroke: {
          dashArray: 5
        }
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        formatter: (val) => `${val}%`
      }
    },
    tooltip: {
      x: {
        show: false
      }
    }
  };
};
