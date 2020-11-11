import React, { FC, ReactElement} from 'react'
import { SvgIconProps } from '@material-ui/core';
import "./SidebarOption.css";


interface Props{
    text: string;
    Icon: React.ComponentType<SvgIconProps>; // (props: SvgIconProps) => JSX.Element
    active?: unknown;
}

const SidebarOption: FC<Props> = ({text, Icon, active}): ReactElement => { 
        return (
        <div className = {`sidebarOption  ${active && 'sidebarOption--active'} `}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
  };

export default SidebarOption
