import FormInfo from "../components/FormInfo";

export const FormPage = () => {
    return (
        <div className="formpage"  style={{
                    backgroundImage: 'url("https://i.imgur.com/CHS03MD.png")',
                    backgroundSize: "cover",
                }}>
            <div className="blur" />
            <FormInfo />
        </div>
    )
}