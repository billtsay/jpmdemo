import PhotoAlbum from "react-photo-album";
import photos from "../photos";

export default function Album () {
    return <PhotoAlbum photos={photos} layout="rows" />;
}
