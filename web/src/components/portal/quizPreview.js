import React, { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Checkmark } from 'react-checkmark'

const QuizPreview = ({ url, quiz, showCreator }) => {

    const [copied, setCopied] = useState(false);

    const topic = <strong>{quiz.topic}</strong> ;
    const header = showCreator ? <h6 className="has-text-weight-normal">A quiz on {topic} created by {quiz.creator}</h6> : 
                                <h6 className="has-text-weight-normal">A quiz on {topic} created on {quiz.creationDate}</h6>;

    return(
        <div className="box content" style={{maxWidth: "550px"}}>
            {header}
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