import React from "react";
import {Tooltip} from "antd";
import {svgs} from "./svg";
import styles from "./tools.less";

/**
 * 工具栏
 * @param onChange
 * @constructor
 */
const Tools = ({onChange}) => {
    return (
        <div id={styles.tools}>
            {svgs?.map(res => (
                <div key={res.key} onClick={()=>onChange(res)}>
                    <Tooltip title={res.name}>
                        {res.icon}
                    </Tooltip>
                </div>
            ))}
        </div>
    )
}

export default Tools;