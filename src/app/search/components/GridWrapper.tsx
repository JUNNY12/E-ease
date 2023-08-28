import styles from "../styles/search.module.scss"
import CollectionSideBar from "./CollectionSideBar"
import SortSideBar from "./SortSideBar"
import MobileCollection from "./MobileCollection"
import MobileSort from "./MobileSort"

export default function GridWrapper({ children }: { children: React.ReactNode }) {
  return (
    <section >
      <div>
        <MobileCollection />
      </div>
      <div>
        <MobileSort />
      </div>
      <div className={styles.gridWrapper}>
        <CollectionSideBar />
        {children}
        <SortSideBar />
      </div>
    </section>
  )
}