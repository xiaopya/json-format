import React, {useRef, useState} from "react";
import TextArea from "@/component/TextArea";
import Tools from "@/component/Tools";
import styles from "./home.less";
import {message} from "antd";


/**
 * 压缩格式化后的 JSON 字符串
 * @return {string|null} - 压缩后的 JSON 字符串
 * @param data
 */
const compressJson = (data: string | null): string | null => {
    try {
        // 将格式化的 JSON 字符串解析为对象
        const jsonObject = JSON.parse(data);
        // 将对象序列化为紧凑的 JSON 字符串
        const compressedJson = JSON.stringify(jsonObject);
        return compressedJson;
    } catch (error) {
        console.error("Invalid JSON string:", error);
        return "Invalid JSON string:" + error;
    }
};

/**
 * 将指定的文本复制到剪贴板。
 *
 * 此函数使用了Web API navigator.clipboard.writeText来实现文本的复制操作。
 * 如果操作成功，它将调用回调函数，并传递成功的结果。
 * 如果操作失败，它将在控制台中记录错误。
 *
 * @param {string} text - 需要复制到剪贴板的文本。
 * @param {Function} callback - 复制操作成功后调用的回调函数，接收成功的结果作为参数。
 */
const copyToClipboard = (text: string, callback: any) => {
    navigator.clipboard.writeText(text).then((res) => {
        callback(res);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
};

/**
 * 格式化JSON字符串。
 *
 * 该函数尝试解析一个JSON字符串，并将其格式化为易读的格式。如果输入的字符串不是有效的JSON，
 * 则函数会返回一个错误提示。
 *
 * @param data 要格式化的JSON字符串。
 * @returns 格式化后的JSON字符串或错误提示。
 */
const format = (data: {} | null) => {
    try {
        if (typeof data !== "string") {
            return 'Invalid JSON: ' + data;
        }
        const parsed = JSON.parse(data);
        const formatted = JSON.stringify(parsed, null, 2);
        return formatted;
    } catch (error) {
        return 'Invalid JSON: ' + error.message;
    }
};

export default function HomePage() {
    const onRef = useRef(null);
    const [data, setData] = useState("")

    const onChange = (val: { target: { value: React.SetStateAction<{}>; }; }) => {
        onRef.current = val.target.value;
        setData(format(val.target.value));
    }

    const handlerOnChange = (val: { key: string }) => {
        const prev = onRef.current;
        switch (val.key) {
            case "format":
                setData(format(prev));
                break;
            case "compress":
                setData(compressJson(prev));
                break;
            case "copy":
                copyToClipboard(data,()=>{
                    message.success("复制成功");
                });
                break;
            case "clear":
                setData("");
                onRef.current = '';
                break;
        }
    }

    return (
        <div id={styles.ylongContainer}>
            <div className={styles.ylongMain}>
                <div className={styles.left}>
                    <TextArea value={onRef.current} style={{height: '100%', color: '#818C7C'}} onChange={onChange} bordered={false}/>
                </div>
                <div className={styles.right}>
                    <Tools onChange={handlerOnChange}/>
                    <TextArea style={{height: '100%', color: '#818C7C'}} value={data ?? "{}"} bordered={false} placeholder=""/>
                </div>
            </div>
        </div>
    );
}
