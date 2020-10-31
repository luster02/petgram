import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import { Img, ImgWrapper, Article } from './styles'
import { LikeButton } from '../LikeButton'
import { useNearScreen } from '../../hooks/useNearScreen'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, element] = useNearScreen()

    return (
        <Article ref={element}>
            {
                show && <Fragment>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} alt="detail" />
                        </ImgWrapper>
                    </Link>

                    <LikeButton likes={likes} id={id}/>
                </Fragment>
            }
        </Article>
    )
}
