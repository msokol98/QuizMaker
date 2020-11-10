import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Checkmark } from 'react-checkmark'

const QuizPreview = ({ url, quiz, showCreator }) => {

    const [copied, setCopied] = useState(false);

    const header = showCreator ? `A quiz on ${quiz.topic} created by ${quiz.creator}` : `A quiz on ${quiz.topic} created on ${quiz.creationDate}`;

    return(
        <div className="box content" style={{maxWidth: "550px"}}>
            <h6 className="has-text-weight-normal">{header}</h6>
            <h6 className="has-text-weight-normal">You and your friends can take it at: <a href={url}>{url}</a></h6>

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