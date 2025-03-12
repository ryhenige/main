import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { PageWrapper } from './styles/StyledComponents'

export default function Home() {
  useDocumentTitle('Home')
  return (
    <PageWrapper>
      <h1>Home!</h1>
    </PageWrapper>
  )
}
  