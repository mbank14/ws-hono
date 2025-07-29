import { useState } from "hono/jsx"
import { Layout } from "../components/Layout"


export const RoomPage = () =>{
    const [data, setData] = useState();

    return(
        <Layout text="Play Room">
            <div>
                <div>

                {data ? (
                    <p>
                        tinggal 2 orang lagi yang belum, colek temen kamu sekarang !
                    </p>
                ) : (
                    <p>Belum ada yang mulai, jadilah yang pertama dan ingatkan teman kamu!!</p>
                )}
                </div>

                <div>
                    
                </div>
            </div>
        </Layout>
    )
}