import React from 'react'
import notFound from '../../../assets/notfound.png'
// import PropTypes from 'prop-types' import {TextField, Submit} from
// '../Styled'
import { Box } from 'grid-styled'
import { Image, Hover } from '../Styled'

const Item = ({item, setHover}) => (
    <Box width={[1/2, 1/3]} pb={4}>
     {item.image
             ?<Image src={item.image} alt={item.name} onMouseEnter={() => setHover(true, item.id)} onMouseLeave={() => setHover(false, item.id)} />
             : <Image src={notFound} alt="Image not found"/>}
             {item.hover &&
            <Hover>{item.name}</Hover>}
    </Box>
)
// onMouseEnter={this.props.setHover(true)}  onMouseLeave={this.props.setHover(false)}
export default Item
