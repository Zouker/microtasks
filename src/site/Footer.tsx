import React from 'react';

type FooterPropsType = {
    titleForFooter: string
}

const Footer = (props: FooterPropsType) => {
    return (
        <div>{props.titleForFooter}</div>
    );
};

export default Footer;