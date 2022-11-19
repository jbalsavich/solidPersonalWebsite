import {
    A
}
from "solid-start";
import './Download.css';
export default function Download(props) {
    const { file } = props;
    return (
        <div>
            <A href={`https://us.balsavich.dev/${file}`} download>
                <button>Download</button>
            </A>
        </div>
    );
}