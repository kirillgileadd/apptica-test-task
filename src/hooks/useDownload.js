import {useRef} from "react";

export const useDownload = () => {
    const chartRef = useRef(null)

    const exportPngImage = () => {
        const link = document.createElement('a')
        link.download = 'chart.png'
        link.href = chartRef.current.toBase64Image()
        link.click()
    }

    function convertChartDataToCSV(args) {
        let data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        const columnDelimiter = args.columnDelimiter || ',';
        const lineDelimiter = args.lineDelimiter || '\n';

        let keys = Object.keys(data[0]);

        let result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function (item) {
            let ctr = 0;
            keys.forEach(function (key) {
                if (ctr > 0) result += columnDelimiter;
                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });
        return result;
    }

    function exportCSV(value) {
        return () => {
            let filename = 'chart-data.csv';
            let csv = "";
            for (let i = 0; i < value.datasets.length; i++) {
                csv += convertChartDataToCSV({
                    data: value.datasets[i].data
                });
            }
            if (csv == null) return;

            if (!csv.match(/^data:text\/csv/i)) {
                csv = 'data:text/csv;charset=utf-8,' + csv;
            }

            let data = encodeURI(csv);
            let link = document.createElement('a');
            link.setAttribute('href', data);
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    return [chartRef, exportPngImage, exportCSV]
}