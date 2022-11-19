export default function PDFViewer(props) {
    const { file } = props;
    return (
        <div>
            <iframe
                src={`https://docs.google.com/gview?url=https://us.balsavich.dev/${file}&embedded=true`}
                style="width:100%; height:100vh;"
                frameborder="0"
            ></iframe>
        </div>
    );
}
