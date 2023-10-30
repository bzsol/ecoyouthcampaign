import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/first/1.jpg",
    thumbnail: "/first/1.jpg",
  },
  {
    original: "/first/2.jpg",
    thumbnail: "/first/2.jpg",
  },
  {
    original: "/first/3.jpg",
    thumbnail: "/first/3.jpg",
  },
  {
    original: "/first/4.jpg",
    thumbnail: "/first/4.jpg",
  },
  {
    original: "/first/5.jpg",
    thumbnail: "/first/5.jpg",
  },
  {
    original: "/second/1.jpg",
    thumbnail: "/second/1.jpg",
  },
  {
    original: "/second/2.jpg",
    thumbnail: "/second/2.jpg",
  },
  {
    original: "/second/3.jpg",
    thumbnail: "/second/3.jpg",
  },
  {
    original: "/second/4.jpg",
    thumbnail: "/second/4.jpg",
  },
  {
    original: "/second/5.jpg",
    thumbnail: "/second/5.jpg",
  },
  {
    original: "/third/1.jpg",
    thumbnail: "/third/1.jpg",
  },
  {
    original: "/third/2.jpg",
    thumbnail: "/third/2.jpg",
  },
  {
    original: "/third/3.jpg",
    thumbnail: "/third/3.jpg",
  },
  {
    original: "/third/4.jpg",
    thumbnail: "/third/4.jpg",
  },
  {
    original: "/fourth/1.jpg",
    thumbnail: "/fourth/1.jpg",
  },
  {
    original: "/fourth/2.jpg",
    thumbnail: "/fourth/2.jpg",
  },
  {
    original: "/fourth/3.jpg",
    thumbnail: "/fourth/3.jpg",
  },
  {
    original: "/fourth/4.jpg",
    thumbnail: "/fourth/4.jpg",
  },
  {
    original: "/fourth/5.jpg",
    thumbnail: "/fourth/5.jpg",
  },
  {
    original: "/fifth/1.jpg",
    thumbnail: "/fifth/1.jpg",
  },  
  {
    original: "/fifth/2.jpg",
    thumbnail: "/fifth/2.jpg",
  },  
  {
    original: "/fifth/3.jpg",
    thumbnail: "/fifth/3.jpg",
  },  
  {
    original: "/fifth/4.jpg",
    thumbnail: "/fifth/4.jpg",
  },
  {
    original: "/sixth/1.jpg",
    thumbnail: "/sixth/1.jpg",
  },  
  {
    original: "/sixth/2.jpg",
    thumbnail: "/sixth/2.jpg",
  },  
  {
    original: "/sixth/3.jpg",
    thumbnail: "/sixth/3.jpg",
  },  
  {
    original: "/sixth/4.jpg",
    thumbnail: "/sixth/4.jpg",
  },
  {
    original: "/seventh/1.jpg",
    thumbnail: "/seventh/1.jpg",
  },
  {
    original: "/seventh/2.jpg",
    thumbnail: "/seventh/2.jpg",
  },
  {
    original: "/seventh/3.jpg",
    thumbnail: "/seventh/3.jpg",
  },
  {
    original: "/seventh/4.jpg",
    thumbnail: "/seventh/4.jpg",
  },
  {
    original: "/seventh/5.jpg",
    thumbnail: "/seventh/5.jpg",
  },
  {
    original: "/seventh/6.jpg",
    thumbnail: "/seventh/6.jpg",
  },
  {
    original: "/seventh/7.jpg",
    thumbnail: "/seventh/7.jpg",
  },
];

function ImageSwiper() {
  return (
    <div className="pt-20 mx-auto w-2/3">
    <ImageGallery items={images} className="" />
    </div>
  )
}

export default ImageSwiper