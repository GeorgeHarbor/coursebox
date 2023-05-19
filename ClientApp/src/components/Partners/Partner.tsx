import { Image } from '@chakra-ui/react';
import React from 'react';

interface Props {
    alt: string,
    src: string
}
 
class Partner extends React.Component<Props> {
    render() {
        return(
            <Image maxWidth='10%' src={this.props.src} alt={this.props.alt}></Image>
        )
    }
}
 
export default Partner;