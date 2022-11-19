import { Title } from "solid-start";
import PDFViewer from '../components/PDFViewer';
import Download from '../components/Download';
export default function Resume() {
    return (
        <main>
        <Title>Resume</Title>
        
        <PDFViewer file="/resume/Resume-08_04_2022.pdf"/>
        <Download file="/resume/Resume-08_04_2022.pdf" />
        
        </main>
    );
    }
