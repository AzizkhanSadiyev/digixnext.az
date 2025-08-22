import { useRef, useEffect } from "react";
import styles from "./faq.module.css";

export default function AccordionItem({ title, content, isOpen, onClick }) {
    const contentRef = useRef(null);

    useEffect(() => {
        if(contentRef.current) {
            contentRef.current.style.maxHeight = isOpen
                ? `${contentRef.current.scrollHeight}px`
                : "0px";
        }
    }, [isOpen]);

    return (
        <div className={`${styles.collapse_row} ${isOpen ? styles.active : ""}`} onClick={onClick}>
            <div className={styles.collapse_btn} >
                <p>{title}</p>
            </div>
            <div
                ref={contentRef}
                className={styles.collapse_content}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}
