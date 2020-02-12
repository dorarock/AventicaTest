import React from 'react';

export default props => (
            <div className="react_header">
                <span className="react_header_txt">React app for <span className="react_header_logo">Aventica</span></span>
                <div className="green_mark_count">{props.greenMark.length == 0 ? '' : props.greenMark.length}</div>
            </div>
)

