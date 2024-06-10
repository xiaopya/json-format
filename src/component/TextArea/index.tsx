import React from "react";
import {Input} from "antd";
import { TextAreaProps } from "antd/es/input";
import { TextAreaRef } from "antd/es/input/TextArea";
import { JSX } from "react/jsx-runtime";

const {TextArea} = Input;

/**
 * 自定义 TextArea 组件。
 *
 * 该组件封装了 Ant Design 的 TextArea 组件，提供了一个带占位符和自动大小调整的文本区域。
 * 它接受所有 TextAreaProps 和 React.RefAttributes<TextAreaRef> 属性，以增强其功能和控制其行为。
 * 主要用于需要用户输入大量文本的场景，自动调整高度可以根据文本内容动态变化，提供更好的用户体验。
 *
 * @param props 组件属性，包括 JSX.IntrinsicAttributes, TextAreaProps 和 React.RefAttributes<TextAreaRef>。
 * @returns 返回一个包含 TextArea 组件的 div 元素。
 */
export default (props: JSX.IntrinsicAttributes & TextAreaProps & React.RefAttributes<TextAreaRef>) => {
    return (
        <TextArea
            placeholder="请输入需要转换的数据"
            {...props}
        />
    );
}
