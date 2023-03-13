import Album from "./pages/Album";
import photos from "./photos";

export default function App() {
    return <Album photos={photos} layout="rows" />;
}
