import React from 'react';

type HeaderPropsType = {
    title: string
}

const Header = (props: HeaderPropsType) => {
    return (
        <>{props.title}</>
    );
};

export default Header;