function downloadPDF()
{
    const element = document.querySelector('.container-lg');
    const opt = 
    {
        margin: 0,
        filename: 'Hoja_de_vida_Jhon_Alexander.pdf',
        image: { type: 'jpeg', quality:0.98},
        html2canvas: {scale:2, useCors: true,scrolly:0},
        jsPDF: {unit: 'mm', format:'letter',orientation:'portrait'},
        pagebreak: {mode: ['css','legacy']}
    };
    html2pdf().set(opt).from(element).save();
}