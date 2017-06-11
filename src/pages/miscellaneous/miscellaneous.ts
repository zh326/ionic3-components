import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-miscellaneous',
    templateUrl: 'miscellaneous.html'
})
export class MiscellaneousListPage {
    rootPage: any;
    items: Array<{ title: string, page: any }>;

    constructor(public navCtrl: NavController, public menu: MenuController) {
        this.items = [
            {
                title: 'Autosizing Textarea',
                page: 'AutosizingTextarea'
            },
            {
                title: 'Blog Post',
                page: 'BlogPostPage'
            },
            {
                title: 'Charts',
                page: 'ChartsPage'
            },
            {
                title: 'Chat',
                page: 'ChatsPage'
            },
            {
                title: 'Countdown',
                page: 'CountdownPage'
            },
            {
                title: 'Expandable Header',
                page: 'ExpandableHeaderPage'
            },
            {
                title: 'Flash Card',
                page: 'FlashCardPage'
            },
            {
                title: 'Pinterest Masonry Cards',
                page: 'MasonryCardsPage'
            },
            {
                title: 'Testimonials',
                page: 'TestimonialsPage'
            },
            {
                title: 'Tinder Cards',
                page: 'TinderCardsPage'
            },
            // {
            //     title: 'Weather',
            //     page: WeatherPage
            // },
        ]
    }

    itemTapped(event, item) {
        this.navCtrl.push(item.page);
    }
}
