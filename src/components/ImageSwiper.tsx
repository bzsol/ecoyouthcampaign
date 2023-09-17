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
];

function ImageSwiper() {
  return (
    <div className="pt-20 mx-auto">
    <ImageGallery items={images} />
    </div>
  )
}

export default ImageSwiper