'use client';
import { useMemo } from 'react';
import ReactApexChart from './ReactApexChart';
import { ApexOptions } from 'apexcharts';
import merge from 'lodash/merge';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';

type AreaChartsProps = {
  series: ApexOptions['series'];
  options?: ApexOptions;
  themeColor?: 'primary' | 'secondary';
  title?: ApexOptions['title'];
  height?: number;
  className?: string;
};

export function AreaCharts({
  options,
  series,
  height = 400,
  title,
  themeColor = 'primary',
  className
}: AreaChartsProps) {
  const theme = useTheme();

  const apexOptions = useMemo(() => {
    const { palette } = theme;
    let colors = { main: '#1271FF', secondary: '#B2D1FF' };
    if (themeColor === 'primary') {
      colors = { main: palette.info.main, secondary: (palette.info as any)['100'] };
    } else {
      colors = { main: palette.success.main, secondary: (palette.success as any)['100'] };
    }

    const defaultConfig = defaultOptions(colors.main, colors.secondary);

    if (title) {
      defaultConfig.title = {
        style: { fontWeight: 700, fontSize: '18px' },
        ...title
      };
    }

    if (!options) return defaultConfig;
    return merge(defaultConfig, options);
  }, [options, theme, themeColor, title]);

  return (
    <div
      className={clsx(
        'bg-white p-3 pb-0 rounded-lg border border-solid border-gray-400',
        className
      )}
    >
      <ReactApexChart options={apexOptions} series={series} height={height} />
    </div>
  );
}

const defaultOptions = (mainColor: string, secondaryColor: string): ApexOptions => {
  return {
    chart: {
      id: 'chart-area',
      fontFamily: 'Exo',
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
      borderColor: '#E0E0E0',
      strokeDashArray: 7
    },
    annotations: {
      yaxis: [
        {
          y: 80,
          y2: null,
          strokeDashArray: 0,
          fillColor: '#c2c2c2',
          borderColor: '#71BD74',
          borderWidth: 1,
          opacity: 0.3,
          offsetX: 0,
          offsetY: 0,
          width: '100%',
          yAxisIndex: 0,
          label: {
            borderColor: '#71BD74',
            borderWidth: 1,
            borderRadius: 2,
            text: 'Ngưỡng đạt',
            textAnchor: 'start',
            position: 'start',
            offsetX: 0,
            offsetY: -3,
            style: {
              background: '#71BD74',
              color: 'white',
              fontSize: '11px',
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
    colors: [mainColor, secondaryColor],
    stroke: {
      width: [4, 2],
      curve: 'smooth',
      dashArray: [0, 20],
      colors: [mainColor, secondaryColor]
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
