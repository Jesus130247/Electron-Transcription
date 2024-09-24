import styles from './summarizedText.module.css'


export default function SummarizedText({response}: any) {

    return (<>
    <p className={styles.summarizedText}>
    <h3>SUMMARIZED</h3>
    {response}
    </p>
    </>
    )
}