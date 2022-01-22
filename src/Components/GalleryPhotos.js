import React,{useState} from 'react'

const GalleryPhotos = () => {
    let data=[
        {
            id: 1,
            imgSrc:'temple1.jpg'
        },
        {
            id: 2,
            imgSrc:'temple2.jpg'
        },
        {
            id: 3,
            imgSrc:'temple3.jpg'
        },
        {
            id: 4,
            imgSrc:'temple4.jpg'
        },
        {
            id: 5,
            imgSrc:'temple5.jpg'
        },
        {
            id: 6,
            imgSrc:'temple6.jpg'
        },
        {
            id: 7,
            imgSrc:'temple7.jpg'
        },
        {
            id: 8,
            imgSrc:'temple8.jpg'
        },
]

const [model,setModel] = useState(false);
const [tempImgSrc, setTempImgSrc] = useState('');
const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
}
    return (
        <>
        <div className={model? "model open": "model"}>
            <img src={tempImgSrc} alt="" />
            <i class="far fa-times-circle" onClick={() =>setModel(false)}></i>
        </div>
        <div className="gallery my-2">
            {data.map((item,index)=>{
                return(
                    <div className='gallerypics' key={index} onClick={()=>getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt="" style={{width: "100%"}} />
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default GalleryPhotos
