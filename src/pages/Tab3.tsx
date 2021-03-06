import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { person, arrowBackCircle, arrowBack } from "ionicons/icons";
import { Link } from "react-router-dom";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="warning">
          <IonTitle className="title2">My Jobs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar color="warning">
            <IonTitle className="title3" size="large">
              My Jobs
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol>
              <Link to="/tab1">
                <IonIcon size="large" icon={arrowBackCircle} />
              </Link>
            </IonCol>
            <IonCol>
              <IonButton color="dark">Past</IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="medium">Future</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          <IonItem className="listJobs">
            <IonLabel>
              <IonGrid>
                <IonRow className="listJobs">
                  <Link to="/tab8">
                    <IonCol className="listCol">
                      <IonIcon icon={person} />
                    </IonCol>
                    <IonCol className="listCol">P&S Paving</IonCol>
                    <IonCol className="listCol">8/22</IonCol>
                  </Link>
                </IonRow>
              </IonGrid>
            </IonLabel>
          </IonItem>

          {/* fake */}
          <IonItem className="listJobs">
            <IonLabel>
              <IonGrid>
                <IonRow className="listJobs">
                  <Link to="/tab8">
                    <IonCol className="listCol">
                      <IonIcon icon={person} />
                    </IonCol>
                    <IonCol className="listCol">Archer Western</IonCol>
                    <IonCol className="listCol">8/18</IonCol>
                  </Link>
                </IonRow>
              </IonGrid>
            </IonLabel>
          </IonItem>
          <IonItem className="listJobs">
            <IonLabel>
              <IonGrid>
                <IonRow className="listJobs">
                  <Link to="/tab8">
                    <IonCol className="listCol">
                      <IonIcon icon={person} />
                    </IonCol>
                    <IonCol className="listCol">P&S Paving</IonCol>
                    <IonCol className="listCol">8/17</IonCol>
                  </Link>
                </IonRow>
              </IonGrid>
            </IonLabel>
          </IonItem>
          <IonItem className="listJobs">
            <IonLabel>
              <IonGrid>
                <IonRow className="listJobs">
                  <Link to="/tab8">
                    <IonCol className="listCol">
                      <IonIcon icon={person} />
                    </IonCol>
                    <IonCol className="listCol">Chinchor</IonCol>
                    <IonCol className="listCol">8/14</IonCol>
                  </Link>
                </IonRow>
              </IonGrid>
            </IonLabel>
          </IonItem>
          <IonItem className="listJobs">
            <IonLabel>
              <IonGrid>
                <IonRow className="listJobs">
                  <Link to="/tab8">
                    <IonCol className="listCol">
                      <IonIcon icon={person} />
                    </IonCol>
                    <IonCol className="listCol">P&S Paving</IonCol>
                    <IonCol className="listCol">8/11</IonCol>
                  </Link>
                </IonRow>
              </IonGrid>
            </IonLabel>
          </IonItem>
          <IonItem className="listJobs">
            <IonLabel>
              <IonGrid>
                <IonRow className="listJobs">
                  <Link to="/tab8">
                    <IonCol className="listCol">
                      <IonIcon icon={person} />
                    </IonCol>
                    <IonCol className="listCol">P&S Paving</IonCol>
                    <IonCol className="listCol">8/09</IonCol>
                  </Link>
                </IonRow>
              </IonGrid>
            </IonLabel>
          </IonItem>
          <IonItem className="listJobs">
            <IonLabel>
              <IonGrid>
                <IonRow className="listJobs">
                  <Link to="/tab8">
                    <IonCol className="listCol">
                      <IonIcon icon={person} />
                    </IonCol>
                    <IonCol className="listCol">P&S Paving</IonCol>
                    <IonCol className="listCol">8/08</IonCol>
                  </Link>
                </IonRow>
              </IonGrid>
            </IonLabel>
          </IonItem>
        </IonList>
        {/* <ExploreContainer name="don" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
