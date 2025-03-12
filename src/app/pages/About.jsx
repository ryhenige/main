import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import { PageWrapper } from './styles/StyledComponents'

export default function About() {
  useDocumentTitle('About')
  return (
    <PageWrapper>
      <h1>About Us</h1>
    </PageWrapper>
  )
}
  