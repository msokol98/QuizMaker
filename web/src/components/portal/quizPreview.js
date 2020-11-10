import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Checkmark } from 'react-checkmark'

const QuizPreview = ({ url, quiz }) => {

    const [copied, setCopied] = useState(false);

    return(
        <div className="box content" style={{maxWidth: "500px"}}>
            <h6 className="has-text-weight-normal">A quiz on {quiz.topic} from {quiz.creationDate}</h6>
            <h6 className="has-text-weight-normal">Your friends can take it at: <a href={url}>{url}</a></h6>

            <CopyToClipboard text={url}
                onCopy={() => setCopied(true)}>
                <button className="button is-light">Copy Link to Clipboard</button>
            </CopyToClipboard>

            {copied && 
                <Checkmark size={40} />
            }
        </div>
    )
};
 
export default QuizPreview;