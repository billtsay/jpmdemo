import { Component } from 'react'

import AppsList, { AppTp } from '../../Registry'

import './index.scss'
import ReorderIcon from '@material-ui/icons/Reorder'

class AppStore extends Component {
  state = {
    useApp: false,
    website: '',
  }

  clickme = (app: AppTp) => {
    if (app.appId == 0) {
      this.setState({ useApp: true, website: app.website });
    } else {
      window.open(app.website, app.appName);
    }
  }

  homebutton = () => {
    return (
      <div className='nav-bar'>
        <button onClick={() => this.setState({ useApp: false })}>
          {''}
          <ReorderIcon />
        </button>
      </div>
    )
  };

  selectedTabId = (tabId: any) => {
    this.setState({ activeTabId: tabId })
  }

  onChangeSearchInput = (event: { target: { value: any } }) => {
    this.setState({ searchInput: event.target.value })
  }

  render() {
    const showApp = (this.state.useApp) ? (
      <div className="iframe-holder">
      <iframe src={this.state.website} seamless width="100%" ></iframe>
  </div>
) : (
      <div>
        <ul className="apps-list">
          {AppsList.map((app) => (
            <li className="app-item">
              <img className="app-image" src={app.imageUrl} alt={app.appName} onClick={this.clickme.bind(this, app)} />
              <p className="app-name">{app.appName}</p>
            </li>
          ))}
        </ul>
      </div>
    );

    return (
      <div>
        {this.homebutton()}
        {showApp}
      </div>
    )

  }

}

export default AppStore
