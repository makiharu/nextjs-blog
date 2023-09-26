import { useRouter } from "next/router";

const animalId = () => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <div><h2>{id}</h2></div>
    );
}

export default animalId;
