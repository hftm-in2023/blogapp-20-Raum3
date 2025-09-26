import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog, BlogCard } from './blog-card';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('BlogCard', () => {
  let component: BlogCard;
  let fixture: ComponentFixture<BlogCard>;
  let routerMock: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        BlogCard,
      ],
    });
    fixture = TestBed.createComponent(BlogCard);
    component = fixture.componentInstance;
    routerMock = TestBed.inject(Router);
    routerMock.initialNavigation();

    fixture.componentRef.setInput('routeCommands', ['/path', 1]);
  });

  it('should create', () => {
    // arrange
    fixture.componentRef.setInput('model', {
      id: 1,
      author: 'a author',
      likedByMe: false,
      title: 'A title',
    } as Blog);

    // act
    fixture.detectChanges();

    // assert
    expect(component).toBeTruthy();
  });
  // Test 1: Author
  it('show correct author', () => {
    fixture.componentRef.setInput('model', {
      id: 1,
      author: 'a author',
      likedByMe: false,
      title: 'A title',
    } as Blog);

    fixture.detectChanges();

    const author = fixture.debugElement.query(
      By.css('.blog-author p'),
    ).nativeElement;
    expect(author.innerText).toBe('a author');
  });

  // Test 2: Titel
  it('show correct card-title', () => {
    fixture.componentRef.setInput('model', {
      id: 1,
      author: 'a author',
      likedByMe: false,
      title: 'A title',
    } as Blog);

    fixture.detectChanges();

    const title = fixture.debugElement.query(
      By.css('.card-title'),
    ).nativeElement;
    expect(title.innerText).toBe('A title');
  });

  // Like-Button schwarz
  it('show correct data', () => {
    fixture.componentRef.setInput('model', {
      id: 1,
      author: 'a author',
      likedByMe: false,
      title: 'A title',
    } as Blog);

    fixture.detectChanges();

    const likeButton = fixture.debugElement.query(
      By.css('[data-testid="like-button-icon"]'),
    );
    expect(likeButton.styles['color']).toBe('black');
  });

  // Liked by rot
  it('show correct data', () => {
    fixture.componentRef.setInput('model', {
      id: 1,
      author: 'a author',
      likedByMe: true,
      title: 'A title',
    } as Blog);

    fixture.detectChanges();

    const likeButton = fixture.debugElement.query(
      By.css('[data-testid="like-button-icon"]'),
    );
    expect(likeButton.styles['color']).toBe('red');
  });
});
