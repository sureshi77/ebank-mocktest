import {
  NotFoundCard,
  NotFoundImg,
  NotFoundHead,
  NotFoundInfo,
} from './styledComponents'

const NotFound = () => (
  <>
    <NotFoundCard>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png "
        alt="not found"
      />
      <NotFoundHead>Page Not Found</NotFoundHead>
      <NotFoundInfo>
        We are sorry, the page you requested could not be found
      </NotFoundInfo>
    </NotFoundCard>
  </>
)
export default NotFound
