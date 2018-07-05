import React from 'react'
import notFound from '../../../assets/notfound.png'
// import PropTypes from 'prop-types' import {TextField, Submit} from
// '../Styled'
import {Box} from 'grid-styled'
import {Image} from '../Styled'

const Item = (item) => (
    <Box width={[ 1/2, 1/3 ]} pb={4}>
        {(item.image)
            ? <Image src={item.image} alt={item.name}/>
            : <Image src={notFound} alt="Image not found"/>}
    </Box>
)

export default Item
