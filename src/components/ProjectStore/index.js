import {useState} from 'react'
import './index.css'
import TabItem from '../TabItem'
import ProjectItem from '../ProjectItem'

const tabsList = [
    {tabId: 'DYNAMIC', displayText: 'Advance'},
    {tabId: 'RESPONSIVE', displayText: 'Medium'},
    {tabId: 'STATIC', displayText: 'basic/static'},
  
  
]

const projectList = [
  {
    projectId: 0,
    projectName: 'Money Manager',
    imageUrl:
      'https://images.ctfassets.net/pdf29us7flmy/4xYvjYER14VA6S3FaD0h8J/0d0a855371e1172419a82f15444afcdf/time-value-money.jpg?w=720&q=100&fm=jpg',
    category: 'STATIC',
    link: "https://anilmoney36.ccbp.tech/",
    descreption:`The app initially displays the Balance Amount, Income Amount, and Expenses Amount as 0. The Balance Amount is calculated by subtracting the Expenses Amount from the Income Amount based on the list of transactions. The Income Amount is calculated by subtracting the Expenses Amount, and the Expenses Amount is calculated by adding only the Expenses Amount from the transaction list.

The MoneyManager component is provided with transactionTypeOptions, which consists of transaction type objects containing optionId and displayText properties. Initially, the titleInput and amountInput values are empty, and the first option in the list is selected.

When a transaction is added by entering values in the titleInput, amountInput, and selecting an option, the "Add" button adds the transaction to the transaction history list, updating the total balance, income, and expenses accordingly. Afterward, the titleInput, amountInput, and optionId are reset to their initial values.

If the delete button is clicked in the transaction history, the respective transaction is removed from the list, and the total balance, income, and expenses are updated accordingly. The total balance is always calculated as totalBalance = totalIncome - totalExpenses.`  
},

{
    projectId: 1,
    projectName: 'IPL Dashboard',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkAtvZ3JR10AhzDv5Drm3qK5TmI2R3SyFqOg&s',
    category: 'RESPONSIVE',
    link: "https://anilIplApp36.ccbp.tech",
    descreption:`The app initially opens to the Home Route, where an HTTP GET request is made to the teamsApiUrl to fetch the list of teams. While the data is being fetched, a loader is displayed. Once the data is retrieved, a list of team cards is shown on the Home Route.

    When a team card is clicked, the page navigates to the Team Matches Route, with the URL pattern /team-matches/:id, where :id is the team's identifier. In the Team Matches Route, another HTTP GET request is made to the teamMatchesApiUrl using the team id to fetch the team's recent match data. While this data is being loaded, a loader is shown. After the data is successfully fetched, the page displays the team banner, the latest match details, and a list of the team's recent matches.`,
  },
  {
    projectId: 2,
    projectName: 'blog List',
    imageUrl:
      'https://mir-s3-cdn-cf.behance.net/projects/404/e20e5e63416297.Y3JvcCw0NDksMzUyLDM2NDUsMTA3.jpg',
    category: 'RESPONSIVE',
    link: "https://anilbloglist36.ccbp.tech/",
    descreption:`This app displays a list of blogs and user information on the Home Route. Here’s the functionality breakdown
    Home Route 
    User Info The app displays user details, such as the user’s name and profile information.
    Blog List A list of blogs is shown, where each blog entry consists of various properties (such as title, date, and description).
    Blogs List The Home component is provided with the blogsList, an array of blog details. Each blog object contains properties like
    Key A unique identifier for each blog entry.
    Data Contains the specific content or details of the blog (e.g., title, description, author, date, etc.).
    This allows users to see a list of blogs along with the associated user information on the home page.`,
  },
  {
    projectId: 3,
    projectName: 'Events',
    imageUrl:
      'https://t4.ftcdn.net/jpg/02/16/94/65/360_F_216946587_rmug8FCNgpDCPQlstiCJ0CAXJ2sqPRU7.jpg',
    category: 'RESPONSIVE',
    link: "https://anilEvents36.ccbp.tech",
    descreption:`The app initially displays the "No Active Event View." When an event image is clicked, the view changes based on the event's registrationStatus. If the registrationStatus is "YET_TO_REGISTER," the app shows the "Yet To Register View." If the registrationStatus is "REGISTERED," the app displays the "Registered View." If the registrationStatus is "REGISTRATIONS_CLOSED," the "Registrations Closed View" is shown. The app uses an eventsList, which contains a list of event objects with properties like registrationStatus to determine which view to display when an event image is clicked.`,
  },
  {
    projectId: 4,
    projectName: 'Reviews',
    imageUrl:
      'https://www.pushengage.com/wp-content/uploads/2021/05/Encourage-Your-Customers-to-Write-More-Reviews.jpg',
    category: 'RESPONSIVE',
    link: "https://anilre.ccbp.tech/",
    descreption:"The app displays reviews in a carousel format, allowing users to navigate through them using left and right arrows. When the left arrow is clicked, the previous review details are displayed. Similarly, when the right arrow is clicked, the next review details are shown. If the currently displayed review is the first in the list, clicking the left arrow will not change the review. Similarly, if the displayed review is the last in the list, clicking the right arrow will have no effect. The ReviewsCarousel component receives the reviewsList prop, which contains a list of review objects, each with properties that define the review details.",
  },
  
  {
    projectId: 5,
    projectName: 'Nxt Watch',
    imageUrl:
      'https://www.techsmith.com/blog/wp-content/uploads/2023/03/how-to-make-a-youtube-video.png',
    category: 'DYNAMIC',
    link: "https://anilnxtwatch36.ccbp.tech",
    descreption:`NxtWatch is a video streaming platform built as a clone of YouTube, allowing users to seamlessly interact with a range of video content. Key features include 
    Login functionality for personalized experiences
    Video search and exploration of video categories
    Like/Dislike and save videos to a personalized list
    Light/Dark theme toggle for a customized UI
    Desktop-first design for an optimized viewing experience
    Developed using ReactJS, NxtWatch simulates a YouTube-like experience with robust functionalities for users to engage with videos`
  },
  {
    projectId: 6,
    projectName: 'Jobby App',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4-6HutZDWUQnmpND39k4SvCBASNWHGPFZA&s',
    category: 'DYNAMIC',
    link: "https://aniljobbyapp.ccbp.tech/",
    descreption:`In this project, I have developed the Jobby App, an application that offers a user-friendly platform for job seekers. Users can log in and access a comprehensive list of job opportunities with various features, including search functionality by job title and filtering options based on salary range and employment type.`
  },
  {
    projectId: 7,
    projectName: 'Emoji Game',
    imageUrl:
      'https://imgcdn.stablediffusionweb.com/2024/5/16/db5a348b-dd81-446e-9844-38eddb1d2e4d.jpg',
    category: 'DYNAMIC',
    link: "https://anilemojigame36.ccbp.tech/",
    descreption:`This is a game application where players interact with a set of emojis. The objective is to click on each emoji exactly once to increase the score. Here’s how the app works:

            Initial State: The score and total score start at 0.
            Gameplay:
            If an emoji is clicked for the first time (not previously clicked), the score increases by 1.
            If all emojis are clicked exactly once, the game status displays "Game Won" along with the best score and a "Play Again" button.
            If the same emoji is clicked more than once, the game status displays "Game Lost" with the current score and a "Play Again" button.
            Best Score: The best score is the highest score achieved across all sessions. If the current score surpasses the previous best score, the top score is updated.
            Play Again: Clicking the "Play Again" button resets the game and score but keeps the top score intact.`
  },
  
  


  
 
]

const ProjectStore = () => {
  const [activetabId, setActiveTabId] = useState(tabsList[0].tabId)
  const [activeApps, setActiveApps] = useState(
    projectList.filter(eachOne => eachOne.category === activetabId))


  const changeActiveTab = id => {
    const filterApps = projectList.filter(eachOne => eachOne.category === id)
    setActiveTabId(id)
    setActiveApps(filterApps)
  }

  return (
    <div className="bg-conti">
      <div className="main-conti">
        <h1>My Projects</h1>
        <ul className="tabs-canti">
          {tabsList.map(eachOne => (
            <TabItem
              key={eachOne.tabId}
              eachTab={eachOne}
              activetabId={activetabId}
              changeActiveTab={changeActiveTab}
            />
          ))}
        </ul>
        <ul className="app-list">
          {activeApps.map(eachOne => (
            <ProjectItem key={eachOne.projectId} app={eachOne} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectStore
