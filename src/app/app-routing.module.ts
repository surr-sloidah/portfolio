import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games-page/games.component';
import { SevenFavoursComponent } from './games/seven-favours/seven-favours.component';
import { BuddyComponent } from './games/buddy/buddy.component';
import { SecurityRoomComponent } from './games/security-room/security-room.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { SlaughterLandsComponent } from './games/slaughter-lands/slaughter-lands.component';
import { CyberblazeComponent } from './games/cyberblaze/cyberblaze.component';
import { FumblingWizardComponent } from './games/fumbling-wizard/fumbling-wizard.component';
import { GoobersComponent } from './games/goobers/goobers.component';
import { BlogsComponent } from './blogs-page/blogs.component';
import { BlogComponent } from './blog/blog.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { BuddyPrivacyPolicyComponent } from './games/buddy_privacypolicy/buddy_privacypolicy.component';
import { EdenComponent } from './games/eden/eden.component';
import { CollaboratorsComponent } from './collaborators/collaborators.component';
import { SocialsComponent } from './socials/socials.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      {
        path: '',
        title: "surr sloidah",
        component: HomeComponent
      },
      {
        path: 'collaborators',
        title: "Collaborators",
        component: CollaboratorsComponent
      },
      {
        path: 'socials',
        title: "Socials",
        component: SocialsComponent
      },
      {
        path: 'games-list',
        title: 'Games',
        component: GamesComponent
      },
      {
        path: 'games',
        children: [
          {
            path: 'eden',
            title: 'EDEN',
            component: EdenComponent
          },
          {
            path: 'seven-favours',
            title: 'Seven Favors',
            component: SevenFavoursComponent
          },
          {
            path: 'buddy',
            title: 'Buddy',
            component: BuddyComponent
          },
          {
            path: 'security-room',
            title: 'The Security Room',
            component: SecurityRoomComponent
          },
          {
            path: 'slaughter-lands',
            title: 'Slaughter Lands',
            component: SlaughterLandsComponent
          },
          {
            path: 'cyberblaze',
            title: 'Cyberblaze',
            component: CyberblazeComponent
          },
          {
            path: 'fumbling-wizard',
            title: 'The Fumbling Wizard',
            component: FumblingWizardComponent
          },
          {
            path: 'goobers',
            title: 'Goobers',
            component: GoobersComponent
          }
        ]
      },
      // {
      //   path: 'certifications',
      //   title: 'Certifications',
      //   component: CertificationsComponent
      // },
      // {
      //   path: 'sandbox',
      //   title: 'Sandbox',
      //   component: SandboxComponent
      // },
      // {
      //   path: 'blogs',
      //   title: 'Blogs',
      //   component: BlogsComponent,
      // },
      // {
      //   path: 'blogs/:index',
      //   title: 'Blog',
      //   component: BlogComponent
      // },
      {
        path: 'privacy',
        children: [
          {
            path: 'buddy',
            title: 'Buddy - Android Privacy Policy',
            component: BuddyPrivacyPolicyComponent
          },
        ]
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())]
})
export class AppRoutingModule { }
